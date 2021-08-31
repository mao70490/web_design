$.ajax(
    {
        url: 'resume.json',
        method: 'GET',
        dataType: 'json',
        
        success: function(data){
            // 下載成功時
            console.log('----success-----');
            console.log(data);
            let name = document.getElementById('name');
            let rofs = document.getElementById('rofs');
            let major = document.getElementById('major');
            let we = document.getElementById('we');
            let expertise = document.getElementById('expertise');
            let hobby = document.getElementById('hobby');

            name.innerHTML = data.name
            rofs.innerHTML = data.rofs
            major.innerHTML = data.major
            we.innerHTML = data.we
            expertise.innerHTML = data.expertise
            hobby.innerHTML = data.hobby

            },
        
        error: function(xhr, status , error){
                console.log('------error------');
                console.log(xhr);
                console.log(status);
                console.log(error);

            }
    }
);

let name = document.getElementById('name');
let rofs = document.getElementById('rofs');
let major = document.getElementById('major');
let we = document.getElementById('we');
let expertise = document.getElementById('expertise');
let hobby = document.getElementById('hobby');
