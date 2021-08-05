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
    const { email_address, status } = (await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed" as Status,
      }
    )) as unknown as { email_address: string; status: string }

    return res.status(201).json({ email: email_address, status })
  } catch (error) {
    const { text } = error.response
    const { status, ...rest } = JSON.parse(text)

    if (Number(status) >= 400 && Number(status) < 500) {
      return res.status(status).json({ status, ...rest })
    }

    return res.status(500).json("An unexpected error occurred.")
  }
}
