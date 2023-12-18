export default function Page() {

    console.log('inside invoices');

    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://cms.v2.365automotivemarketing.com/api/v2/dealers`,
                {
                    method: 'GET',
                    // headers: {
                    //     'X-RapidAPI-Key': 'your-rapidapi-key',
                    //     'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                    // },
                    // test
                }
            );
            const data = await res.json();
            console.log(data);
 
            // newMap.forEach((values, keys) => {
            //     console.log(values, keys);
            // });

            // data.forEach( (element: any) => {
            //     console.log('element == ', element);
            // });
            
            // console.log('data.attributes === ', data.[0].attributes);
        } catch (err) {
            console.log(err);
        }
    };
    callAPI();

    return (
        <p>Invoices Page</p>
    );
}
