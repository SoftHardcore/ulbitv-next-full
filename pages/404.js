import MainContainer from "../components/MainContainer";

export default function Error() {
    return (
        <MainContainer>
            <p>404</p>
            <h1>
                Ой, мы не нашли страницу :&#125;
            </h1>
            <style jsx>
                {`
                    p, h1 {
                        text-align: center;
                    }
                    p {
                        font-size: 120px;
                    }
                    h1 {
                        font-size: 40px;
                    }
                `}
            </style>
        </MainContainer>
    )
};