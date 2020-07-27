let submit = document.querySelector("#submit")
submit.addEventListener('click', (e) => EmailCheck(e))
function EmailCheck(e) {
    let error = document.querySelector('.email__box__error')
    error.style.display = 'none';
    let input = document.querySelector('#email');
    let value = input.value;
    let regex = new RegExp(/^[\w | \W]+[@]\D+[.]+\D/gi)
    let result = regex.test(value);
    if(result){
        let Monkey = MonkeyCheck(value);
        let number = NumberCheck(value);
        if(Monkey && number){
            error.style.display = 'none';
            alert("gg");
            window.location.reload();
        }else{
            error.style.display = 'block'
        }
    }else{
        error.style.display = 'block'
    }
}
function MonkeyCheck(v){
    v = v.split("")
    let index = v.indexOf("@");
    let afterMonkey = v.splice(index+1)
    let arr = ['!','@','#','$','%','^','&','*','(',')','[',']','{','}',';',':',"'",'"',',','<','>','/','?',"|",'-','_','+','=']
    arr = arr.map(a => {
        if(afterMonkey.includes(a)){
            return false;
        }else return true;
    })
    arr = arr.every(a => a)
    return arr;
}
function NumberCheck(v){
    v = v.split("")
    let index = v.indexOf("@");
    let afterMonkey = v.splice(index+1)
    afterMonkey = afterMonkey.map(a => {
        if(parseInt(a) >= 0){
            return false;
        }else return true;
    })
    afterMonkey = afterMonkey.every(a => a);
    return afterMonkey;
}