import { ImageProps } from "next/image"
import { useCallback, useState } from "react"
import benWright from "public/assets/images/ben-wright.jpg"
import sydneyBolinger from "public/assets/images/sydney-bolinger.jpg"

export type Endorsement = {
  name: string
  title: string
  company: string
  content: string
  image: Exclude<ImageProps["src"], string>
}

export const endorsements: readonly Endorsement[] = [
  {
    name: "Benjamin Wright",
    title: "Director of Ecommerce",
    company: "Space Race",
    image: benWright,
    content: `
I worked alongside Michael on the Web Development Team at FRN/UHS. Mike is super friendly and top of the line at his craft. His work in DevOps and JavaScript elevated our team's workflow to the next level, making everyone on our team better at what they do. Mike was our "go-to" guy whenever we had complex development issues. He always communicated clearly and timely while consistently delivering excellent results. It was a privilege to learn from and work with Mike!
`,
  },
  {
    name: "Sydney Bolinger",
    title: "Director of Marketing",
    company: "Bible Project",
    image: sydneyBolinger,
    content: `
I had the pleasure of working alongside Michael at Emergency Reporting. We worked on several projects and campaigns together, and he truly helped me grow in my own abilities.
 
Michael was known around the company for his strong video editing skills, his ability to write great content, and evergreen passion for learning. He planned and executed several company-wide projects, and I was always impressed by his close attention to detail. 

Michael was a great mentor for me, and his analytical mind proved very helpful during the projects we worked on together. His warm, helpful spirit and passion for creating awesome things made working with him a great experience.

I would highly recommend Michael for future roles and responsibilities, as well as his musical abilities (he rocks). 
`,
  },
]

export function useEndorsement(data: readonly Endorsement[] = endorsements) {
  if (data.length === 0) throw new Error(`Endorsements cannot be empty.`)

  const defaultIndex = 0
  const [index, setIndex] = useState(defaultIndex)

  const reset = useCallback(() => {
    setIndex(defaultIndex)
  }, [setIndex])

  const increment = useCallback(() => {
    if (index === data.length - 1) {
      reset()
      return
    }

    setIndex((prev) => prev + 1)
    return
  }, [index, setIndex, reset, data])

  const endorsement = data[index]

  return { endorsement, increment, reset }
}
