import { renderHook, act } from "@testing-library/react-hooks";
import { useEndorsement, endorsements } from "hooks/useEndorsement";

describe(`useEndorsement`, () => {
  it(`fails`, () => {
    const { result } = renderHook(() => useEndorsement());

    act(() => {
      result.current.increment();
    });

    expect(result.current.endorsement).toMatchObject(endorsements[1]);
  });
});
