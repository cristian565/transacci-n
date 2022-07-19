export interface TransactionDetails {
  data: {
    amountInCents: number;
    billingData: null;
    createdAt: string;
    currency: string;
    customerData:{
      full_name: string;
      phone_number: string;
    };
    customerEmail: string;
    finalizedAt: string;
    id: string;
    paymentLinkId: string;
    paymentMethod: {
      type: string;
      extra: {
        name?: string;
        brand?: string;
        last_four?: string;
        ticket_id?: string;
        return_code?: string;
        request_date?: string;
        async_payment_url?: string;
        traceability_code?: string;
        transaction_cycle?: string;
        transaction_state?: string;
        external_identifier?: string;
        bank_processing_date?: string;
        bin?: string;
        exp_year?: string;
        exp_month?: string;
        card_holder?: string;
        business_agreement_code?: string;
        payment_intention_identifier?: string;
        transaction_id?: string;
      };
      phone_number?: string;
      token?: string;
      installments?: number;
      user_type?: number|string;
      user_legal_id?: string;
      user_legal_id_type?: string;
      payment_description?: string;
      financial_institution_code?: string;
    };
    paymentMethodType: string;
    paymentSourceId: null;
    redirectUrl: null;
    reference: string;
    shippingAddress: null;

    redirect_url: string;
    status: string;
    statusMessage: string;
    merchant: {
      name: string;
      legal_name: string;
      contact_name: string;
      phone_number: string;
      logo_url: null;
      legal_id_type: string;
      email: string;
      legal_id: string;
    };
    taxes: any[];
  };
  meta: {
    trace_id: string;
  };
}

export interface dataDetails {
  
    amountInCents: number;
    billingData: null;
    createdAt: string;
    currency: string;
    customerData:{
      full_name: string;
      phone_number: string;
    };
    customerEmail: string;
    finalizedAt: string;
    id: string;
    paymentLinkId: string;
    paymentMethod: {
      type: string;
      extra: {
        name?: string;
        brand?: string;
        last_four?: string;
        ticket_id?: string;
        return_code?: string;
        request_date?: string;
        async_payment_url?: string;
        traceability_code?: string;
        transaction_cycle?: string;
        transaction_state?: string;
        external_identifier?: string;
        bank_processing_date?: string;
        bin?: string;
        exp_year?: string;
        exp_month?: string;
        card_holder?: string;
        business_agreement_code?: string;
        payment_intention_identifier?: string;
        transaction_id?: string;
      };
      phone_number?: string;
      token?: string;
      installments?: number;
      user_type?: number|string;
      user_legal_id?: string;
      user_legal_id_type?: string;
      payment_description?: string;
      financial_institution_code?: string;
    };
    paymentMethodType: string;
    paymentSourceId: null;
    redirectUrl: null;
    reference: string;
    shippingAddress: null;

    redirect_url: string;
    status: string;
    statusMessage: string;
    merchant: {
      name: string;
      legal_name: string;
      contact_name: string;
      phone_number: string;
      logo_url: null;
      legal_id_type: string;
      email: string;
      legal_id: string;
    };
    taxes: any[];
 
}