import './styles.css';

type Props = {
    text: string;
}

export default function ButtonPrimary({text} : Props){
    return (
        <div class="dsc-btn dsc-btn-blue">
            {text}
        </div>
    );
}