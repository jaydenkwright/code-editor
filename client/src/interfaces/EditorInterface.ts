interface language {
    language: String,
    displayName: String,
    value: String,
    onChange: any
}

export type languages =  {
    [key: string]: language
}

