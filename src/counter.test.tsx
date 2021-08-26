import {render,fireEvent} from "@testing-library/react"
import { Counter } from "./counter";

it("checkCounterButton",()=>{
const {queryByTitle} = render(<Counter/>);
const btn = queryByTitle("addition");
expect(btn).toBeTruthy()
})

it("checkCounterButton",()=>{
const {queryByTitle} = render(<Counter/>);
const btn = queryByTitle("subtraction");
expect(btn).toBeFalsy()
})