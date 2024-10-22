import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import './products.css'

export const Products = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function loadProduct() {
            await api.get(`products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.log("Produto não encontrado!", error);
                navigate('/', { replace: true });
                return;
            })
        }

        loadProduct()
    }, [id])

    return (
        <div className="produto-info">
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.brand}/>
            <p>{product.description}</p>
            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a target="blank" href={`http://google.com/search?q=${product.title}`}>
                    Mais na internet
                    </a>
                </button>
            </div>
        </div>
    );
}