import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type Fund_Project = {
    $$type: 'Fund_Project';
    amount: bigint;
}

export function storeFund_Project(src: Fund_Project) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1143817326, 32);
        b_0.storeUint(src.amount, 32);
    };
}

export function loadFund_Project(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1143817326) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadUintBig(32);
    return { $$type: 'Fund_Project' as const, amount: _amount };
}

function loadTupleFund_Project(source: TupleReader) {
    let _amount = source.readBigNumber();
    return { $$type: 'Fund_Project' as const, amount: _amount };
}

function storeTupleFund_Project(source: Fund_Project) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    return builder.build();
}

function dictValueParserFund_Project(): DictionaryValue<Fund_Project> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFund_Project(src)).endCell());
        },
        parse: (src) => {
            return loadFund_Project(src.loadRef().beginParse());
        }
    }
}

export type Update_Status = {
    $$type: 'Update_Status';
    statusID: bigint;
}

export function storeUpdate_Status(src: Update_Status) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(838918299, 32);
        b_0.storeUint(src.statusID, 32);
    };
}

export function loadUpdate_Status(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 838918299) { throw Error('Invalid prefix'); }
    let _statusID = sc_0.loadUintBig(32);
    return { $$type: 'Update_Status' as const, statusID: _statusID };
}

function loadTupleUpdate_Status(source: TupleReader) {
    let _statusID = source.readBigNumber();
    return { $$type: 'Update_Status' as const, statusID: _statusID };
}

function storeTupleUpdate_Status(source: Update_Status) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.statusID);
    return builder.build();
}

function dictValueParserUpdate_Status(): DictionaryValue<Update_Status> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUpdate_Status(src)).endCell());
        },
        parse: (src) => {
            return loadUpdate_Status(src.loadRef().beginParse());
        }
    }
}

export type Dispute_Resolve = {
    $$type: 'Dispute_Resolve';
    address: Address;
}

export function storeDispute_Resolve(src: Dispute_Resolve) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2089403455, 32);
        b_0.storeAddress(src.address);
    };
}

export function loadDispute_Resolve(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2089403455) { throw Error('Invalid prefix'); }
    let _address = sc_0.loadAddress();
    return { $$type: 'Dispute_Resolve' as const, address: _address };
}

function loadTupleDispute_Resolve(source: TupleReader) {
    let _address = source.readAddress();
    return { $$type: 'Dispute_Resolve' as const, address: _address };
}

function storeTupleDispute_Resolve(source: Dispute_Resolve) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.address);
    return builder.build();
}

function dictValueParserDispute_Resolve(): DictionaryValue<Dispute_Resolve> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDispute_Resolve(src)).endCell());
        },
        parse: (src) => {
            return loadDispute_Resolve(src.loadRef().beginParse());
        }
    }
}

 type JobContract_init_args = {
    $$type: 'JobContract_init_args';
    seller: Address;
    buyer: Address;
    dispute_resolver: Address;
    contract_price: bigint;
}

function initJobContract_init_args(src: JobContract_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.seller);
        b_0.storeAddress(src.buyer);
        b_0.storeAddress(src.dispute_resolver);
        let b_1 = new Builder();
        b_1.storeInt(src.contract_price, 257);
        b_0.storeRef(b_1.endCell());
    };
}

async function JobContract_init(seller: Address, buyer: Address, dispute_resolver: Address, contract_price: bigint) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initJobContract_init_args({ $$type: 'JobContract_init_args', seller, buyer, dispute_resolver, contract_price })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const JobContract_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    3028: { message: `Max time to complete not exceeded` },
    3234: { message: `Only Seller can deliver` },
    3546: { message: `Only Seller can call - buyer not reviewed ` },
    3956: { message: `Incorrect State, can only be accepted when status dispute` },
    4429: { message: `Invalid sender` },
    7872: { message: `Max time to deposit exceeded` },
    18044: { message: `Incorrect State, can only be Not delivered when status funded` },
    18675: { message: `Max time to review not exceeded` },
    22025: { message: `Only Buyer can accept` },
    22641: { message: `Max time to deliver exceeded` },
    27002: { message: `Invalid status` },
    27088: { message: `Incorrect State, needs to be status delivered` },
    32991: { message: `Incorrect State, can only be funded when status unfunded` },
    37959: { message: `Max time to dispute exceeded` },
    38848: { message: `Incorrect State, can only be accepted when status delivered` },
    39030: { message: `Only dispute resolver can resolve dispute` },
    49548: { message: `Only Buyer can call - seller not delivered ` },
    49940: { message: `Incorrect State, can only be delivered when status funded` },
    52504: { message: `Only Buyer can dispute` },
    57500: { message: `Max time to accept exceeded` },
    57710: { message: `Incorrect amount to fund contract` },
}

export default class JobContract implements Contract {
    
    static async init(seller: Address, buyer: Address, dispute_resolver: Address, contract_price: bigint) {
        return await JobContract_init(seller, buyer, dispute_resolver, contract_price);
    }
    
    static async fromInit(seller: Address, buyer: Address, dispute_resolver: Address, contract_price: bigint) {
        const init = await JobContract_init(seller, buyer, dispute_resolver, contract_price);
        const address = contractAddress(0, init);
        return new JobContract(address, init);
    }
    
    static fromAddress(address: Address) {
        return new JobContract(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        errors: JobContract_errors
    };
    
    public constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Fund_Project | Update_Status | Dispute_Resolve | 'sellerDelivered' | 'buyerAccept' | 'buyerDispute' | 'sellerNotDelivered' | 'buyerNotReviewed' | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Fund_Project') {
            body = beginCell().store(storeFund_Project(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Update_Status') {
            body = beginCell().store(storeUpdate_Status(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Dispute_Resolve') {
            body = beginCell().store(storeDispute_Resolve(message)).endCell();
        }
        if (message === 'sellerDelivered') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'buyerAccept') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'buyerDispute') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'sellerNotDelivered') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message === 'buyerNotReviewed') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getContractPrice(provider: ContractProvider) {


        let builder = new TupleBuilder();
        // console.log("Prov", provider)

        let source = (await provider.get('ContractPrice', builder.build())).stack
        console.log("SSS", source)
        let result = source.readBigNumber();
        // let result = 1n
        return result;
    }
    
    async getFunds(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('Funds', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getDeployedTime(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('DeployedTime', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getDepositTime(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('DepositTime', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getContractStatus(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('ContractStatus', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getMaxTimeToDeposit(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('MaxTimeToDeposit', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getMaxTimeToComplete(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('MaxTimeToComplete', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getMaxTimeToReview(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('MaxTimeToReview', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getDeliveryTime(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('DeliveryTime', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }
    
    async getSeller(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('Seller', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getBuyer(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('Buyer', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}