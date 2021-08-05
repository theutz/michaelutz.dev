import mailchimp, { Status } from "@mailchimp/mailchimp_marketing"
import { NextApiRequest, NextApiResponse } from "next"

const { MAILCHIMP_API_KEY, MAILCHIMP_API_SERVER, MAILCHIMP_AUDIENCE_ID } =
  process.env

if (!MAILCHIMP_API_KEY) throw new Error(`MAILCHIMP_API_KEY is not set.`)
if (!MAILCHIMP_API_SERVER) throw new Error(`MAILCHIMP_API_SERVER is not set.`)
if (!MAILCHIMP_AUDIENCE_ID) throw new Error(`MAILCHIMP_AUDIENCE_ID is not set.`)

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER,
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
      MAILCHIMP_AUDIENCE_ID!,
      {
        email_address: email,
        status: "subscribed" as Status,
      }
    )) as unknown as { email_address: string; status: string }

    return res.status(201).json({ email: email_address, status })
  } catch (error) {
    console.error(error)
    const { text } = error?.response ?? {}
    const { status, ...rest } = JSON.parse(text)

    if (Number(status) >= 400 && Number(status) < 500) {
      return res.status(status).json({ status, ...rest })
    }

    return res.status(500).json("An unexpected error occurred.")
  }
}
