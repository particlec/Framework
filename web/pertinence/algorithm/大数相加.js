自己版本:

function bigNumberAdd(string1,string2 ) {
    let temporaryArr1 = string1.split(""),
        temporaryArr2 = string2.split(""),
        flag=0,
        temporaryNumber,
        max =Math.max(temporaryArr1.length,temporaryArr2.length),
        sum="";
    for (let i=0;i<=max;i++){
        temporaryNumber=~~temporaryArr1.pop()+~~temporaryArr2.pop()+flag;
        sum=(temporaryNumber%10) +sum;
        temporaryNumber > 10 || temporaryNumber === 10 ? (flag = 1) : (flag = 0);
    }
    return sum;
}

// 原理：
//
// 1.将超过精度的数字（字符串表示）转化成数组
// 2.然后利用.pop()取最后一位数组相加,如果要进一位,flag标记上下次加一
// 3.个位与十位的拼装使用  1+"2"="12" ,位数小的放在后面
// 4.运行次数是最大一位数长度+1


// 大数相加:cxzmmvcxz现在夏天热为全球·845
// 其实就是利用从末尾数开始 对应位数相加,个位跟个位,十位跟十位,进一记录一下
//
// 利用js的隐形转换：  比如说 1 + "2" ="12"


const numberF = (number1,number2) => {
    let temporaryArray1= number1.split(""),
        temporaryArray2=number2.split(""),
        runNumber = Math.max(temporaryArray1.length,temporaryArray2.length),
        temporaryNumber,
        flag=0,
        sum="";
    for (let i=0;i<= runNumber;i++){
        // @ts-ignore
        temporaryNumber=  ~~temporaryArray1.pop()+ ~~temporaryArray2.pop() + flag;
        // @ts-ignore
        sum =  temporaryNumber%10 +sum;
        temporaryNumber>10||temporaryNumber===10?flag=1:flag=0;
    }
    return sum;
}