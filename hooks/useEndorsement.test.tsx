import { renderHook, act } from "@testing-library/react-hooks"
import { useEndorsement, Endorsement } from "hooks/useEndorsement"

const data: readonly Endorsement[] = [
  {
    name: "name 1",
    title: "title 1",
    content: "content 1",
    image: { src: "/path-1", width: 100, height: 100 },
    company: "company 1",
  },
  {
    name: "name 2",
    title: "title 2",
    content: "content 2",
    image: { src: "/path-2", width: 100, height: 100 },
    company: "company 2",
  },
]

describe(`useEndorsement`, () => {
  it(`throws when data is empty`, () => {
    expect(() => useEndorsement([])).toThrow(`Endorsements cannot be empty.`)
  })

  it(`returns a default item`, () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useEndorsement(data))

    // Assert
    expect(result.current.endorsement).toMatchObject(data[0])
  })

  it("returns a new item after incrementing", () => {
    // Arrange
    const { result } = renderHook(() => useEndorsement(data))

    // Act
    act(() => {
      result.current.increment()
    })

    // Assert
    expect(result.current.endorsement).toMatchObject(data[1])
  })

  it("resets to initial item when list is exhausted", () => {
    // Arrange
    const { result } = renderHook(() => useEndorsement(data))

    // Act
    act(() => {
      result.current.increment()
    })
    act(() => {
      result.current.increment()
    })

    // Assert
    expect(result.current.endorsement).toMatchObject(data[0])
  })
})
