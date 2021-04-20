var users = [
    {
        name: 'Lina',
        gender: 'F',
        hobby: 'eating',
        avatar: 'avatar1.png'        
    },
    {
        name: 'Jochebed',
        gender: 'F',
        hobby: 'eating',
        avatar: 'avatar2.png'
    },
    {
        name: 'Messi',
        gender: 'M',
        hobby: 'football',
        avatar: 'avatar8.png'
    },
    {
        name: 'Ronaldo',
        gender: 'M',
        hobby: 'football',
        avatar: 'avatar4.png'
    },
    {
        name: 'Linda',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png'
    },
    {
        name: 'Salami',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar8.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'eating',
        avatar: 'avatar8.png'
    },
];

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        
        
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            
            if (gender == 'A' || gender == users[i].gender) {
            
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div></div>\
                            <button>Add me!</button></div>';  
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});