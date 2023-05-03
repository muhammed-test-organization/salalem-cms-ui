import React from "react";

interface ICreateLosChildComponent {
  /** Optional, Translation function, defaults to returning the english version of the text */
  t: (localeKey: string | undefined) => string;
  /** True if the user clicked the submit/add button once, false otherwise */
  hasSubmitted: boolean;
}

interface IOnAdd {
  domain: string;
  verb: string;
  description: string;
}

export interface ICreateLosComponentProps {
  /** Optional, defaults to 'en' */
  lang?: 'en' | 'ar' | 'fr';
  t?: (localeKey: string | undefined) => string;
  onAdd: (values: IOnAdd) => void;
  onDelete?: () => void
}

export type IVerb = string;

export type ISelectedVerb = string | undefined;

export interface ISelectedDomain {
  value: string | undefined;
  explanation: string | undefined;
  verbs: IVerb[];
}

export interface IDomainBoxComponentProps extends ICreateLosChildComponent {
  domains: string[];
  selectedDomain: ISelectedDomain;
  onChange: (domainValue: string) => void;
}

interface IRawVerb {
  title: string;
  explanation: string | '';
}

export interface IRawDomain {
  explanation: string;
  children: IRawVerb[];
}

export interface IDomains {
  [domainValue: string]: IRawDomain;
}

export interface IVerbBoxComponentProps extends ICreateLosChildComponent {
  verbs: IVerb[];
  selectedVerb: ISelectedVerb;
  onChange: (verbValue: string) => void;
}

export interface IDescriptionBoxComponentProps
  extends ICreateLosChildComponent {
  description: string;
  onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => void;
}

export interface IInputElement {
  target: HTMLInputElement;
}
