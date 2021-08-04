import mailchimp, { Status } from "@mailchimp/mailchimp_marketing"
import { NextApiRequest, NextApiResponse } from "next"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: "Email is required" })
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: "subscribed" as Status,
    })

    return res.status(201).json({ error: "" })
  } catch (error) {
    try {
      const { text } = error.response
      const { status, ...rest } = JSON.parse(text)

      if (status >= 400 && status < 500) {
        return res.status(status).json({ error: { status, ...rest } })
      }
    } catch (e) {
      console.error(e)
    }

    return res.status(500).json({ error: error.message || error.toString() })
  }
}
