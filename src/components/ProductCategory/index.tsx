import './styles.css';

type Props = {
    name: string;
}

export default function ProductCategory({name} : Props){

    return (
        <div class="dsc-category">
            {name}
        </div>
    );
}