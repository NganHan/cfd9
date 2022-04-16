// rules = {
//     name: [{required: true}],
//     email: [{required: true, message: 'Email la truong bat buoc'}, {patten: 'email'}]
// }
// form =  {
//     name: '',
//     email: ''
// }
export const patternModel = {
    username: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
    name: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
} 
const ERROR_MESSAGE = {
    required: '*Please input the information',
    pattern: '*Please input the information like format'
}

const validateRequired = (value, rule) => {
    // console.log('value', value); //gt dien
    // console.log('rule', rule); // {required: true, message: "Vui long dien thong tin tai khoan"}
    if(
        (typeof value === 'string' && !value.trim()) ||
        typeof value === 'undefined'

    ){
        return rule.message || ERROR_MESSAGE.required
    }
}

const validatePattern = (value, rule) => {
    let pattern = rule.pattern
    // console.log('pattern', pattern); //email/pass
    // console.log('value pattern', value); //value nhap
    if(typeof pattern === 'string' && typeof patternModel[pattern] !== 'undefined'){
        pattern = patternModel[pattern] ///^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        // console.log('pattern', pattern); 
    }
    if(pattern instanceof RegExp){ //KT kieu cua pattern co phai RegExp k
        if(!pattern.test(value)){ //neu sai dinh dang return ve message
            return rule.message || ERROR_MESSAGE.pattern
        }
    }
}

const validate = (form, rules) => {
    let errorObj = {}
    // console.log('form', form); //user/pass
    // console.log('rules', rules);//user: array[2](required & pattern), pass:...
    for(let i in rules){
        let error = undefined
        for (let j in rules[i]){
            const r = rules[i][j] //requiired || patern
            if(r.required){
                error = validateRequired(form[i], r)
                if(error){
                    break
                }
            }
            if(r.pattern){
                error = validatePattern(form[i], r)
            }
        }
        if(error){
            errorObj[i] = error
        }
    }
    return errorObj
}

export default validate