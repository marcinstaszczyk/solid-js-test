import { Component } from "solid-js";
import styles from './Slider.module.css';

type SliderProps = { checked: boolean, clicked: () => void };

const Slider: Component<SliderProps>
    = (props: SliderProps) => {
        return (
            <label class={styles.switch}>
                <input type="checkbox" checked={props.checked} onchange={props.clicked}/>
                <span class={styles.slider + ' ' + styles.round}></span>
            </label>
        );
    }

export default Slider;
