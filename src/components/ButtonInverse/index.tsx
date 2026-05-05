import './styles.css';

type Props = {
    text: string;
}

export default function ButtonInverse({text}: Props){
    return (
        <div class="dsc-btn dsc-btn-white">
            {text}
        </div>
    );
}