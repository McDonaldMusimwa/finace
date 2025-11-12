import type { Transanction } from "./Transaction"
export type BankStatement={
bankname:string
ownerfirstname:string
ownerlastname:string
periodstart:Date
periodend:Date
currency:string
transactions:Transanction[]
}