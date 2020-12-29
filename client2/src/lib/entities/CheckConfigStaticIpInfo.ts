import { CheckConfigStaticIpInfoStatic } from './CheckConfigStaticIpInfoStatic';

// This file was autogenerated. Please do not change.
// All changes will be overwrited on commit.
export interface ICheckConfigStaticIpInfo {
    error?: string;
    ip?: string;
    static?: CheckConfigStaticIpInfoStatic;
}

export default class CheckConfigStaticIpInfo {
    readonly _error: string | undefined;

    /** */
    get error(): string | undefined {
        return this._error;
    }

    readonly _ip: string | undefined;

    /**
     * Description: Current dynamic IP address. Set if static=no
     * Example: 192.168.1.1
     */
    get ip(): string | undefined {
        return this._ip;
    }

    readonly _static: CheckConfigStaticIpInfoStatic | undefined;

    get static(): CheckConfigStaticIpInfoStatic | undefined {
        return this._static;
    }

    constructor(props: ICheckConfigStaticIpInfo) {
        if (typeof props.error === 'string') {
            this._error = props.error.trim();
        }
        if (typeof props.ip === 'string') {
            this._ip = props.ip.trim();
        }
        if (props.static) {
            this._static = props.static;
        }
    }

    serialize(): ICheckConfigStaticIpInfo {
        const data: ICheckConfigStaticIpInfo = {
        };
        if (typeof this._error !== 'undefined') {
            data.error = this._error;
        }
        if (typeof this._ip !== 'undefined') {
            data.ip = this._ip;
        }
        if (typeof this._static !== 'undefined') {
            data.static = this._static;
        }
        return data;
    }

    validate(): string[] {
        const validate = {
            ip: !this._ip ? true : typeof this._ip === 'string' && !this._ip ? true : this._ip,
            error: !this._error ? true : typeof this._error === 'string' && !this._error ? true : this._error,
        };
        const isError: string[] = [];
        Object.keys(validate).forEach((key) => {
            if (!(validate as any)[key]) {
                isError.push(key);
            }
        });
        return isError;
    }

    update(props: Partial<ICheckConfigStaticIpInfo>): CheckConfigStaticIpInfo {
        return new CheckConfigStaticIpInfo({ ...this.serialize(), ...props });
    }
}