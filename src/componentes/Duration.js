export default function Duration({ duration }) {
    const valueOne = duration.split(" ")[0]
    const valueTwo = duration.split(" ")[2]

    console.log('====================================');
    console.log(valueTwo);
    console.log('====================================');

    const time = valueTwo === "per"
        ? `${valueOne}min p/ep`
        : `${valueOne}H : ${valueTwo}min`
    
    return time;
}