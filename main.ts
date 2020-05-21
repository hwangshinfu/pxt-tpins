//% block="test_pins" color="#AA278D" 
//block積木群組名稱,color積木顏色
namespace test_pins {

    // note that Caml casing yields lower case
    // block text with spaces

    //% weight=20
    //% blockId=digital_writepin 
    //% block="digital write pin |%tname| to |%tvalue"
    //% tname.fieldEditor="gridpicker" 
    //% tname.fieldOptions.columns=3 
    //% tvalue.defl=0
    //% tvalue.min=0
    //% tvalue.max=1	
    export function digital_writepin(tname: DigitalPin, tvalue: number): void {
        pins.digitalWritePin(tname, tvalue)
    }
    


    //% weight=30
    //% blockId=analogReadPin 
    //% block="analog write pin |%tname| to |%tvalue"
    //% tname.fieldEditor="gridpicker" 
    //% tname.fieldOptions.columns=3 
    //% tvalue.defl=0
    //% tvalue.min=0
    //% tvalue.max=255	
    export function analogReadPin(tname: analogPin, tvalue: number): void {
        pins.analogReadPin(tname, tvalue)
    }
    }