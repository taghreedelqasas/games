async function getcategory() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '06bc818cfbmshab40ba433282bdbp1f1f8djsn99c0b6eac067', // استبدل YOUR_RAPIDAPI_KEY بمفتاح API الخاص بك
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        let response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options);
        
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            console.log(data[0].title);

            // تأكد من تعريف هذه الدالة في مكان ما في الكود
            displayGames(data);
            console.log('hi');
        } else {
            console.log('error');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// استدعاء الدالة getcategory
getcategory();

// تعريف دالة displayGames (تأكد من تعديلها حسب احتياجاتك)
function displayGames(data) {
    // كود لعرض الألعاب
    console.log('Displaying games:', data);
}
