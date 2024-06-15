// Login page

import { Field } from "@/types/componentProps";

export interface LoginFormConfigProps {
    title: string;
    description: string;
    fields: Field[];
    buttonText: string;
    successMessage: string;
    redirectSuccessPath: string;
}
