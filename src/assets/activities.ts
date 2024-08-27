export interface Activity {
    name: string
    pre: string
    time: number
}
const activities: Array<Activity> = [
    {
        name: "A. Shower",
        pre: "-",
        time: 1
    },
    {
        name: "B. Get dressed",
        pre: "A",
        time: 2
    },
    {
        name: "C. Get car",
        pre: "-",
        time: 3
    },
    {
        name: "D. Make breakfast",
        pre: "-",
        time: 4
    },
    {
        name: "E. Eat breakfast",
        pre: "B, D",
        time: 5
    },
    {
        name: "F. Shower",
        pre: "E",
        time: 6
    },
]
export default activities;