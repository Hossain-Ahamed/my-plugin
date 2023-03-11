const generateOTP = () => {
    const userFor = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789" + `!@#%&*-+=`;
    const lengthForPass = 10;
    let password = "";
    for (let i = 0; i < lengthForPass; i++) {
        password += userFor[Math.floor(Math.random() * userFor.length)];
    }
    return password;

}


console.log(generateOTP());
