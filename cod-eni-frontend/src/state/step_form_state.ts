import {create,  StoreApi, UseBoundStore} from 'zustand'

interface Step1FormData {
    name: string;
    email: string;
    cin: string;
    birth:Date;
    phone:string;
    lieu:string
}

interface Step2FormData {
    passportNumber: string;
    residenceImage: File[];
    photoImage: File[];
}

interface Step3FormData {
    birthCertificate: File[];
    marriageCertificate: File[];
}

interface Step4FormData {
    motherName: string;
    fatherName: string;
    parentsContactNumber: string;
}

type State = {
    step1: Step1FormData;
    step2: Step2FormData;
    step3: Step3FormData;
    step4: Step4FormData;
}

type Action = {
    updateStep1:(step1:State['step1'])=>void
    updateStep2:(step2: State['step2'])=>void
    updateStep3:(step3: State['step3'])=>void
    updateStep4:(step4: State['step4'])=>void
}


type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never
const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S,
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ;(store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}

export const useStepStore = createSelectors(create<State & Action>((set) => ({
    step1: {
        name: "",
        email: "",
        cin: "",
        birth:new Date(),
        phone:"",
        lieu:""

    },
    step2: {
        passportNumber: "",
        residenceImage: [],
        photoImage: []
    },
    step3: {
        birthCertificate: [],
        marriageCertificate:[],
    },
    step4:{
        motherName: "",
        fatherName: "",
        parentsContactNumber: ""
    },
    updateStep1:(step1)=>set(()=>({step1:step1})),
    updateStep2:(step2)=>set(()=>({step2:step2})),
    updateStep3:(step3)=>set(()=>({step3:step3})),
    updateStep4:(step4)=>set(()=>({step4:step4})),
})))




interface ValidationStatus {
    step1: boolean;
    step2: boolean;
    step3: boolean;
    step4: boolean;
}

interface FormStoreState {
    step: number;
    validationStatus: ValidationStatus;
    nextStep: () => void;
    prevStep: () => void;
    setValidationStatus: (step: keyof ValidationStatus, isValid: boolean) => void;
    resetForm: () => void;
}

const useFormStore = create<FormStoreState>((set) => ({
    step: 1,
    validationStatus: {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
    },
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: state.step - 1 })),
    setValidationStatus: (step, isValid) => set((state) => ({
        validationStatus: { ...state.validationStatus, [step]: isValid }
    })),
    resetForm: () => set({
        step: 1,
        validationStatus: { step1: false, step2: false, step3: false, step4: false }
    }),
}));


export default useFormStore;



