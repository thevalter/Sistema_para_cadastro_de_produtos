export default async function deleteData(target) {
   
        await fetch(`http://localhost:3000/products/${target}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
};