import AnimationBalls from "./animations/animationBalls";
import './styles/index.css'

const buttonStart = document.querySelector('.controlPanel > button')

buttonStart.addEventListener('click', () => {
    const countBalls = document.querySelector<HTMLInputElement>('.controlPanel > input').value
    if (Number(countBalls)) {
        const animationBalls = new AnimationBalls(Number(countBalls))
        animationBalls.animation()
    }
})


