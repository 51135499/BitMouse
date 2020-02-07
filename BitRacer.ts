
const N76_ADDR = 0x10

//% weight=0 color=#3CB371 icon="\uf063" block="BitRacer"
namespace BitRacer {
	export enum Motors {
        //% blockId="left motor" block="left"
        M_R = 0,
        //% blockId="right motor" block="right"
        M_L = 1,
        //% blockId="all motor" block="all"
        All = 2
    }
    //% weight=90
    //% blockId=motor_MotorRun block="motor|%index|at speed|%PWM"
    //% PWM.min=-1000 PWM.max=1000
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    export function motorRun(index: Motors, PWM: number): void {
        let i2cbuf = pins.createBuffer(3);
        if (index == 0) {
            i2cbuf[0] = 0x00;
            i2cbuf[1] = PWM>>8;
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (index == 1) {
            i2cbuf[0] = 0x02;
            i2cbuf[1] = PWM>>8;
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (index == 2) {
            i2cbuf[0] = 0x00;
            i2cbuf[1] = PWM>>8;
            i2cbuf[2] = PWM;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
            i2cbuf[0] = 0x02;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
    }
    //% weight=20
    //% blockId=motor_motorStop block="motor |%motors stop"
    //% motors.fieldEditor="gridpicker" motors.fieldOptions.columns=2 
    export function motorStop(motors: Motors): void {
        let i2cbuf = pins.createBuffer(3);
        if (motors == 0) {
            i2cbuf[0] = 0x00;
            i2cbuf[1] = 0;
            i2cbuf[2] = 0;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (motors == 1) {
            i2cbuf[0] = 0x02;
            i2cbuf[1] = 0;
            i2cbuf[2] = 0;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
        if (motors == 2) {
            i2cbuf[0] = 0x00;
            i2cbuf[1] = 0;
            i2cbuf[2] = 0;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
            i2cbuf[0] = 0x02;
            pins.i2cWriteBuffer(N76_ADDR, i2cbuf);
        }
    }
	
}
