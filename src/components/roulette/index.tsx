import React, { useMemo, useState } from "react"
import { Arrow, BigCycle, Containner, Item, MidCycle, MinCycle } from "./styled"
import { calculateCircumference, generateRandomArray, rotateArrayToMatchArrow, sortByRating } from "../../utils"
import { ItemType } from "../../types"

const array = generateRandomArray()
const sortedArray = sortByRating(array);

export default function Roulette() {
  const [totalRotation, setTotalROtation] = useState<null | number>(null)
  const [start, setStart] = useState<boolean>(false)
  const calcedWidth = useMemo(() => calculateCircumference(225) / sortedArray.length, [sortedArray])

  const handleClick = () => {
    const r = rotateArrayToMatchArrow(array);
    setStart(true);
    setTimeout(() => { setTotalROtation(r); setStart(false) }, 3000);
  }

  return (
    <Containner>
      <h1> Click On Game</h1>
      <BigCycle start={start} onClick={handleClick} deg={totalRotation || 0}>
        <MidCycle>
            <MinCycle />
        </MidCycle>
        <Arrow />
      </BigCycle>
      {sortedArray?.map((i: ItemType, index) => <Item width={calcedWidth} color={i.color} deg={(360 / sortedArray.length) * index} />)}
    </Containner>
  )
}

/// share = raiting / allratinggumar;
/// elementratingcount 1 4 5 6 = 16 (0 - 16);