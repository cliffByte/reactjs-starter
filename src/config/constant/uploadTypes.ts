export enum UPLOAD_TYPES { //FILE_TYPES for backend; same used for frontend.
  PAYMENT_VOUCHER = "payment_voucher",
  COPYRIGHT_REMARKS_DOCUMENT = "remarks_document",
  COPYRIGHT_PROOF_FILE = "copyright_proof_document",
  COPYRIGHT_DOCUMENT = "copyright_document",
  COPYRIGHT_SUPPORTING_DOCUMENT = "copyright_supporting_document",
  OLD_COPYRIGHT_DOCUMENT = "old_copyright_document",
  COPYRIGHT_CLAIM_DOCUMENT = "copyright_claim_document",
  COPYRIGHT_OWNERS_IMAGE = "copyright_owners_image",
  CERTIFICATE_AUTHORITY_SIGNATURE = "certificate_authority_signature",

  //for complaints
  COMPLAINT_DOCUMENT = "complaint_document",

  // For Individual
  INDIVIDUAL_CITIZENSHIP = "individual_citizenship",
  INDIVIDUAL_PP = "individual_pp",

  // For Agency
  AGENCY_PAN_VAT = "pan_vat",
  AGENCY_STAMP = "agency_stamp",
  AGENCY_REGISTRATION_DOCUMENT = "agency_registration_document",

  PROFILE_IMAGE = "profile_image",
}

// these are the type of the files, that we set for the uploading files.
// Also, we make use of this file type for identifying the file coming from the Server.
