const randomMenu = () => {
    for(var i=0 ; i<2 ; i++){
        var random_answer = ""
        if(Math.floor(Math.random()*165) <=4){
            random_answer = "กระเพราหมูสับ"  
        }else if(Math.floor(Math.random()*165) <=8){
            random_answer = "ก๋วยเตี๋ยวเรือ"
        }
        else if(Math.floor(Math.random()*165) <=12){
            random_answer = "ข้าวต้มหมู"
        }
        else if(Math.floor(Math.random()*165) <=16){
            random_answer = "ข้าวขาหมู"
        }
        else if(Math.floor(Math.random()*165)<=20){
            random_answer = "ข้าวผัดไข่"
        }
        else if(Math.floor(Math.random()*165) <=24){
            random_answer = "ราดหน้าหมู"
        }
        else if(Math.floor(Math.random()*165) <=28){
            random_answer = "ข้าวหมูทอด"
        }
        else if(Math.floor(Math.random()*165) <=32){
            random_answer = "สุกี้น้ำ"
        }
        else if(Math.floor(Math.random()*165) <=36){
            random_answer = "แหนมคลุก"
        }
        else if(Math.floor(Math.random()*165) <=40){
            random_answer = "ยำวุ้นเส้น"
        }
        else if(Math.floor(Math.random()*165) <=44){
            random_answer = "ส้มตำปูปลาร้า"
        }
        else if(Math.floor(Math.random()*165) <=48){
            random_answer = "พิซซ่าบางกรอบ"
        }
        else if(Math.floor(Math.random()*165) <=52){
            random_answer = "กระเพราหมูกรอบ"
        }
        else if(Math.floor(Math.random()*165) <=56){
            random_answer = "ก๋วยเตี๋ยวหมูกรอบ"
        }
        else if(Math.floor(Math.random()*165) <=60){
            random_answer = "ข้าวต้มปลา"
        }
        else if(Math.floor(Math.random()*165) <=64){
            random_answer = "ข้าวกระเพราขาหมู"
        }
        else if(Math.floor(Math.random()*165) <=68){
            random_answer = "ข้าวผัดหมู"
        }
        else if(Math.floor(Math.random()*165) <=72){
            random_answer = "ข้าวหน้าเนื้อย่าง"
        }
        else if(Math.floor(Math.random()*165) <=76){
            random_answer = "ราดหน้าทะเล"
        }
        else if(Math.floor(Math.random()*165) <=80){
            random_answer = "ข้าวหมูทอดกระเทียม"
        }
        else if(Math.floor(Math.random()*165) <=84){
            random_answer = "สุกี้ทะเล"
        }
        else if(Math.floor(Math.random()*165) <=88){
            random_answer = "แหนมทรงเครื่อง"
        }
        else if(Math.floor(Math.random()*165) <=92){
            random_answer = "ยำรวมทะเล"
        }
        else if(Math.floor(Math.random()*165) <=96){
            random_answer = "ส้มตำไทย"
        }
        else if(Math.floor(Math.random()*165) <=100){
            random_answer = "พิซซ่าหนานุ่ม"
        }
        else if(Math.floor(Math.random()*165) <=104){
            random_answer = "กระเพราทะเล"
        }
        else if(Math.floor(Math.random()*165) <=108){
            random_answer = "ก๋วยเตี๋ยวหมูต้มยำ"
        }
        else if(Math.floor(Math.random()*165) <=112){
            random_answer = "ข้าวต้มกุ้ง"
        }
        else if(Math.floor(Math.random()*165) <=116){
            random_answer = "ผัดไท"
        }
        else if(Math.floor(Math.random()*165) <=120){
            random_answer = "ข้าวผัดทะเล"
        }
        else if(Math.floor(Math.random()*165) <=124){
            random_answer = "ซูซิ เช็ต"
        }
        else if(Math.floor(Math.random()*165) <=128){
            random_answer = "ลาบหมู"
        }
        else if(Math.floor(Math.random()*165) <=132){
            random_answer = "ข้าวคอหมูย่าง"
        }
        else if(Math.floor(Math.random()*165) <=136){
            random_answer = "สุกี้แห้ง"
        }
        else if(Math.floor(Math.random()*165) <=140){
            random_answer = "ไส้กรอกอีสาน"
        }
        else if(Math.floor(Math.random()*165) <=144){
            random_answer = "ยำแชลม่อน"
        }
        else if(Math.floor(Math.random()*165) <=148){
            random_answer = "ตำถั่วหมูกรอบ"
        }
        else if(Math.floor(Math.random()*165) <=152){
            random_answer = "ไก่ทอด"
        }
        else if(Math.floor(Math.random()*165) <=156){
            random_answer = "ราเมน"
        }
        else{
            random_answer = "ข้าวหน้าเนื้อทอด"
        }
        console.log(random_answer)
    }
    return(document.getElementById("result").innerHTML += " : "+ random_answer + ":");
}
