const mealDetail = ({ params }) => {
    return (
        <main>
            <h1>Meal's details</h1>
            <div>{params.slug}</div>
        </main>
    );
};

export default mealDetail;
