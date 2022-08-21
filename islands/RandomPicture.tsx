/** @jsx h */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";

const pictures: string[] = [
  "https://lh3.googleusercontent.com/drgopGs3dpSxzDD36r9NH1lAxiYjM3cnaXrM-HV0tDN_oZV2yOLg2U4f1SyNjXnYGpa668ercNrY9J71Qq7s0QWVBLxNaZUqbVpuyh33v5Lj_Aa8eRzUI-NifOLYCFt8s6Fk5eZFhA=w1920-h1080",
  "https://lh3.googleusercontent.com/SBAWxrBKYjeXD0UrjN2fn0uYGFzhZLlkYzaKtn6-Tk9_a9lxGQd_9pDlewzC6OTnKengZRHGGm9nsyQ4_7Pj4glwww3pHD8oQPVSohcvfsp2-nkygWBClkmAlws815tMd2J5zHdtOA=w1920-h1080",
  "https://lh3.googleusercontent.com/98eLKjmfin49xgVv0Btny8Y6Rv8D0A4RvgyCQpl9NQB2cIjvYU85M_OLadQNpQ1poR4q_AxBl3hGUAZf_e7-XFk3gBXXEyEbch8eUbJpfLi3nKGzTIESj8sN7Kme74RVhak5mMeT6Q=w1920-h1080",
  "https://lh3.googleusercontent.com/CKgLBHbVHt33dM4zpiQz6Dub0GWMDRqVcEbnJmDbPGs5REtmbaReCFN4fW-Y_ak-_afrNO0Z_KUkE5f-oygfavK-swcAYzvFpLUX-oy3nq9bIrgr4spuFm0L5-6S3MkLRgMDCx1RUw=w1920-h1080",
  "https://lh3.googleusercontent.com/vDTnybiFewf6zH26E3fqyd-IACW1ENo_wi_WMXzB4al3fUPEZEcFsf6s1RU7HAcpJ0wfF5f4Itm0UHPQCLINgHiffPvdtrVBboiqLwanSc2HVgO3U-Af3EXR4cn9eu1-efYP__FgnQ=w1920-h1080",
  "https://lh3.googleusercontent.com/1wHEjhdh3EmUjfubCeEjVtngBSlFoJaKWMGafaDbMWEVEEGU-EOzaQUfbGnmJCSdfH0ZYJ_vo7Nc_-ca7ZhmUrWs1ahw2AX4L8GGUvHsfqplyQDY7COqWpnLkRh3fg9NS8S1e9RDbg=w1920-h1080",
  "https://lh3.googleusercontent.com/EhT9vzyk_pmnjQAhmI3cR7XwEziNbG4c4pJlmSWpN7mso-_lgqUOUhZ2BktYbzy5YLiz_He0o-rock8OKFPufuVz1Pbs5fiZJSEzAoEno5QvvQMxzhldPNs6Zj6i1nrTQdLoP6hOhA=w1920-h1080",
  "https://lh3.googleusercontent.com/j-m8ymcx8cD3790nhFGZ4ubDAfEEB3cnGInZOiuL2V54-sYoOr88JTjq2WBVOT9wjadoau-ZlrgcqJwxApSYdMjzAeQM2MjwOC9RdzigpXQANACzqWUE5McsVfu85snAWmPREdqcIw=w1920-h1080",
  "https://lh3.googleusercontent.com/mjqQ_bIge5kszN6fsSjwD5H5s4ljqWnRBOSzlwYu4CgHmH5lXaz7h3wR7aLZ9R9izJdxhQmD1Y0zAjZSGxl6sAj4EwvOnHuRyzpiFQshGYcyiUc5CpjtgjowsR0Vi1wJ_i4LBrC0qg=w1920-h1080",
  "https://lh3.googleusercontent.com/2II-c05jeE_uq843K8xioZKhTSS80rG1DRxYWnLD1QLVIvpmPnZWmkpK4dmWwhy5sG-Y3DJGE8h65DOUDyhz_7oazR1bxHbbP5jqGC3thOWXQR1bckYzCxFni1Dto5cOaTHS1q0e-A=w1920-h1080",
  "https://lh3.googleusercontent.com/6F3Gs0Zse4LHSghlRPmgyxTjjCRPm67eIdPd1gwj8wHCvBILQyOaH5ylN_r4lmDjeCpDBdQa1GuRvUqS5zESjonVe-_dLc9O6kB30-mlXrYS5ggXZ-hwhHAIPoskaCcs4O8Ycdi6aA=w1920-h1080",
  "https://lh3.googleusercontent.com/zdH5nRLgV6FYmyjpVyn5DBxQysPbSVrGqnR4SRpUtv6rNSE2_rdo8SSYsWiWzK7fcqGABfKHuarKia6k5WPhcazF6FRnU134cBYkOg0arrdjAvbt91371scOb4ePzOFnmX4oevhwig=w1920-h1080",
  "https://lh3.googleusercontent.com/m9lNxKMg9f14pw5izzEQ964_-FTx4eyjaW8wxTDkIzZGoyRpJ1966mF5UZAyom-3zGKQI6ZW1pKOHWvAGkOuLu5jV7MMI6_0nSIXhLSlzxwRf5pozDZT45Uup7o2FoI9LeJLl0KcjA=w1920-h1080",
  "https://lh3.googleusercontent.com/Uw-rSlUek-Gc9i3GVfttz7oJVHIyJnSFarZs9VXxyvk7wwZgkgSAWnQHn-Hb7owQnS-rZB-4PJL0c85MfFwBb0Q4F5dQXXuql60exB4ddAMBfdqP6UwZGzDrIr6mafIkyiFu1KIm4g=w1920-h1080",
  "https://lh3.googleusercontent.com/l3AhBFCFWDSLmBRv62Vlh65bCw0YFd3nccw1kBXrrl7-kjV1QBLMarKdd_neDPJukoiQbsbY0HBArnNmesznVLEjpiStc7f-RzQlPn2stTJGZWLnMV5Tb5PNCp9bpA9WsmXf-TyF1w=w1920-h1080",
  "https://lh3.googleusercontent.com/FT5f4yAwVjNj_SUConDCMgjhiwdtnO4sdMcXI2I0f_xNzVMuZuG-xeIN0NUYhtNpaETTGGkFp56u1Yv9ZtBr35Ufa_Lc4oQ3wUfL412WTMuo8h7cNmcecI8HVpZ3U4GZq34eWSAw2A=w1920-h1080",
  "https://lh3.googleusercontent.com/eqrVR8UZZphayJ5i9cXPY7OWfQlFR_-DLk9WhG60VYrUq4MeOMh01pMTf3SqBOYpvGxCj4OS0J16zQQ8aQTksqVPC5SQb50M3GIfCES-zwwWf5HUB4nu4ahW2Z2rhiL5tU0xrl7TNA=w1920-h1080",
  "https://lh3.googleusercontent.com/y_6uQp38lw8Z_dsZ9L0Omp8YXazs-FvfGWkhyTNqiTkGDdXRe-ITtKOVTiaFE-2-WaR9Op34Obu22y4Hnqz7dWrUbvRpR8cbLXzKnXOA54ihnrT5ihy4tDx2F-HMnMzXR5RMKo21Gg=w1920-h1080",
  "https://lh3.googleusercontent.com/sawc51BcD5q_o2YVnuTXHadD2i4e66mklpzAGbNe3nS4gDxEyVIpKBSOX9fqxibRWxU1FUQOpIvkRPhUhotNAogRXgctvIOozTD7g0u-oHh-SWswVqpFetyxUk0-n3TsceOs0y3XLA=w1920-h1080",
  "https://lh3.googleusercontent.com/OjtWIm9XmXoNLVi7iSb1tCj3nengR06GWxi7JK2N3E2E5MHuEAcFAdl4-nZqy7MZcf1BYswascbgwZ1fmm2X0p75Qm_eJsFQgu7Nsz6U0lOww1uOErCgS9jxzjJB7j9nj9xbwfnMzQ=w1920-h1080",
  "https://lh3.googleusercontent.com/h8PkjqU-A19_B0CK4XOdaFlXgtJqNAn_bL3iqCp_nddHGd7uxl6LxOuc2oUnWZrRT9meTuOeOER6dOgXyD0WcDRGVHGGfkU0eQ7dWRu2HtZgTOzcORmkOSay1dDGFmFXp8hVfGjXMQ=w1920-h1080",
];

const RandomPicture = () => {
  const [url, setURL] = useState<string>(
    pictures[Math.floor(Math.random() * pictures.length)],
  );

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => {
          let newURL: string;
          while (true) {
            newURL = pictures[Math.floor(Math.random() * pictures.length)];
            if (newURL !== url) {
              break;
            }
          }
          setURL(newURL);
        }}
        style={{ fontWeight: "bold" }}
        class={tw`hover:bg-blue-100 bg-green-300 px-2 rounded-md my-4`}
      >
        get new image
      </button>
      <img
        referrerpolicy="no-referrer"
        src={url}
      />
    </div>
  );
};

export default RandomPicture;
