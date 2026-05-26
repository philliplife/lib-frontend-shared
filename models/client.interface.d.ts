export interface ClientDetail {
    client: ClientInfo;
    client_Address: ClientAddress[];
    client_Contact: ClientContact[];
    client_Consent: ClientConsent[];
}
export interface ClientConsent {
    consent_Type_Code: string;
    consent_Type_Description: NameDescription;
    consent_Status_Code: string;
    consent_Status_Description: NameDescription;
    consent_Start_Date: string;
    consent_Expiry_Date: string;
    revoked_Date: string;
    revoked_Reason: string;
}
export interface ClientInfo {
    client_Code: string;
    client_Status: NameDescription;
    client_Type_Code: string;
    client_Type_Description: NameDescription;
    current_Age: number;
    date_Of_Birth: string;
    death_Date: string | null;
    death_Reason: string | null;
    first_Name: string;
    first_Name_En: string;
    gender_Code: string;
    gender_Description: NameDescription;
    identity_Description: NameDescription;
    identity_Expiry_Date: string;
    identity_No: string;
    identity_Type: string;
    is_Active: boolean;
    language_Preference_Code: string | null;
    last_Name: string;
    last_Name_En: string;
    marital_Status_Code: string;
    marital_Status_Description: NameDescription;
    middle_Name: string | null;
    middle_Name_En: string | null;
    nationality_Code: string;
    nationality_Description: NameDescription;
    occupation: ClientOccupationType;
    organization_Business_Type: string | null;
    organization_Name: string | null;
    organization_Name_En: string | null;
    organization_Registration_Date: string | null;
    place_Of_Birth_Country_Code: string;
    place_Of_Birth_Country_Description: NameDescription;
    premium_Capacity: string | null;
    religion_Code: string;
    religion_Description: NameDescription;
    remark: string | null;
    suffix_Name: string | null;
    suffix_Name_En: string | null;
    tax_Id: string | null;
    title_Code: string;
    title_Code_En: string | null;
    title_Description: NameDescription;
    title_En_Description: NameDescription | null;
    uuid: string;
}
export interface NameDescription {
    name_En: string;
    name_Th: string;
}
export interface ClientAddress {
    address_Type_Code: string;
    address_Type_Description: NameDescription;
    workplace_Name: string;
    house_No: string;
    village_Building_Name: string;
    moo: string;
    room: string;
    floor: string;
    alley: string;
    road: string;
    subdistrict_Code: string;
    subdistrict_Description: NameDescription;
    district_Code: string;
    district_Description: NameDescription;
    province_Code: string;
    province_Description: NameDescription;
    postal_Code: string;
    full_Address: string;
    is_Primary: boolean;
}
export interface ClientContact {
    contact_Type_Code: string;
    contact_Type_Description: NameDescription;
    contact_Value: string;
}
export interface ClientOccupationType {
    primary: ClientOccupation;
    secondary: ClientOccupation | null;
}
export interface ClientOccupation {
    occupation_Code: string;
    occupation_Description: NameDescription;
    occupation_Position_Code: string;
    occupation_Position_Description: NameDescription;
    occupation_Group_Code: string;
    occupation_Group_Description: NameDescription;
    occupation_Class_Code: string;
    occupation_Class_Description: NameDescription;
    income_Per_Year: string;
}
export interface ClientOccupation {
    occupation_Code: string;
    occupation_Description: NameDescription;
    occupation_Position_Code: string;
    occupation_Position_Description: NameDescription;
    occupation_Group_Code: string;
    occupation_Group_Description: NameDescription;
    occupation_Class_Code: string;
    occupation_Class_Description: NameDescription;
    occupation_Organization_Name: string;
    income_Per_Year: string;
}
export interface ProfileDetailConfig {
    background_Color: string;
    config: ClientDetail;
    label_Config: ProfileDetailLabelConfig;
}
export interface ProfileDetailLabelConfig {
    client_Number: string;
    personal_Information: string;
    gender: string;
    nationality: string;
    marital_Status: string;
    date_Of_Birth: string;
    place_Of_Birth: string;
    identity_Type: string;
    identity_No: string;
    identity_Expiry_Date: string;
    religion: string;
    organization_Information: string;
    registration_Number: string;
    registration_Date: string;
    business_Type: string;
    tax_Id: string;
    contact_Person: string;
    contact_Person_Position_Title: string;
    contact_Person_Department_Name: string;
    contact_Person_Line_Id: string;
    contact_Person_Other_Contact: string;
    contact_Person_Mobile_Number: string;
    contact_Person_Phone_Number: string;
    contact_Person_Email: string;
    years: string;
    contact: string;
    mobile_Number: string;
    business_Number: string;
    email: string;
    home_Phone_Number: string;
    employment: string;
    primary_Occupation: string;
    primary_Business: string;
    primary_Position: string;
    primary_Occupation_Group: string;
    primary_Occupation_Class: string;
    primary_Workplace_Name: string;
    primary_Income_Per_Year: string;
    primary_Employee_Number: string;
    secondary_Occupation: string;
    secondary_Business: string;
    secondary_Position: string;
    secondary_Occupation_Group: string;
    secondary_Occupation_Class: string;
    secondary_Workplace_Name: string;
    secondary_Income_Per_Year: string;
    secondary_Employee_Number: string;
    address: string;
    consent: string;
    consent_Status: string;
    consent_Start_Date: string;
    consent_Expiry_Date: string;
    consent_Revoked_Date: string;
    consent_Revoked_Reason: string;
    no_Address: string;
    no_Consent: string;
}
