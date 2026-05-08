'use client';
import MyContainer from '@/components/ui/MyContainer/MyContainer';
import MyFormInput from '@/components/ui/MyForm/MyFormInput/MyFormInput';
import MyFormWrapper from '@/components/ui/MyForm/MyFormWrapper/MyFormWrapper';
import { useSubscribeNewsLetterMutation } from '@/redux/features/auth/authApi';
import { handleAsyncWithToast } from '@/utils/handleAsyncWithToast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import Link from 'next/link';
import { toast } from 'sonner';
import { z } from 'zod';

const newsLetterValidationSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' }) // Required field validation
    .email({ message: 'Please enter a valid email address' }), // Email format validation
});

const Footer = () => {
  const [subscribeNewsLetter] = useSubscribeNewsLetterMutation();
  const handleSubmit = async (data: any, reset: any) => {
    const res = await handleAsyncWithToast(async () => {
      return subscribeNewsLetter(data?.email);
    });
    if (res?.data?.success) {
      toast.success('Subscribed successfullyZ');
      reset();
    }
  };
  return (
    <footer className="bg-gray-100 py-12">
      <MyContainer className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* DataVault Section */}
          <div className="lg:col-span-1">
            <h3 className="text-primary text-[24px] md:text-[32px] font-bold !leading-[48px] mb-3">
              DataVault
            </h3>
            <p className="text-gray-700 mb-6">
              At DataVault, we make managing your data easy, secure, and
              scalable. our Platform offers powerful database hosting solutions
              tailored to meet the needs of business, developers and data
              professionals.
            </p>
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
              <p className="font-medium">Follow-up:</p>
              <div className="flex space-x-2">
                <Link href="#" className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M12.6005 4.43368H14.1671V1.78368C13.4086 1.70481 12.6464 1.66586 11.8838 1.66702C9.61712 1.66702 8.06712 3.05035 8.06712 5.58368V7.76702H5.50879V10.7337H8.06712V18.3337H11.1338V10.7337H13.6838L14.0671 7.76702H11.1338V5.87535C11.1338 5.00035 11.3671 4.43368 12.6005 4.43368Z"
                      fill="#111111"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0003 5.83366C9.17624 5.83366 8.37065 6.07803 7.68545 6.53587C7.00024 6.99371 6.46619 7.64445 6.15083 8.40581C5.83546 9.16717 5.75295 10.0049 5.91372 10.8132C6.07449 11.6215 6.47133 12.3639 7.05405 12.9466C7.63677 13.5293 8.37919 13.9262 9.18745 14.0869C9.9957 14.2477 10.8335 14.1652 11.5948 13.8498C12.3562 13.5345 13.0069 13.0004 13.4648 12.3152C13.9226 11.63 14.167 10.8244 14.167 10.0003C14.167 8.89526 13.728 7.83545 12.9466 7.05405C12.1652 6.27264 11.1054 5.83366 10.0003 5.83366ZM10.0003 12.5003C9.50587 12.5003 9.02252 12.3537 8.6114 12.079C8.20028 11.8043 7.87984 11.4138 7.69063 10.957C7.50141 10.5002 7.4519 9.99755 7.54836 9.5126C7.64482 9.02765 7.88293 8.58219 8.23256 8.23256C8.58219 7.88293 9.02765 7.64482 9.5126 7.54836C9.99755 7.4519 10.5002 7.50141 10.957 7.69063C11.4138 7.87984 11.8043 8.20028 12.079 8.6114C12.3537 9.02252 12.5003 9.50587 12.5003 10.0003C12.5003 10.6634 12.2369 11.2993 11.7681 11.7681C11.2993 12.2369 10.6634 12.5003 10.0003 12.5003ZM14.167 5.00032C14.0022 5.00032 13.8411 5.0492 13.704 5.14077C13.567 5.23233 13.4602 5.36248 13.3971 5.51476C13.334 5.66703 13.3175 5.83458 13.3497 5.99623C13.3818 6.15788 13.4612 6.30637 13.5777 6.42291C13.6943 6.53946 13.8428 6.61882 14.0044 6.65098C14.1661 6.68313 14.3336 6.66663 14.4859 6.60356C14.6382 6.54048 14.7683 6.43367 14.8599 6.29663C14.9515 6.15959 15.0003 5.99848 15.0003 5.83366C15.0003 5.61264 14.9125 5.40068 14.7562 5.2444C14.6 5.08812 14.388 5.00032 14.167 5.00032ZM18.2837 6.86699C18.2698 6.15484 18.1346 5.45028 17.8837 4.78366C17.651 4.17705 17.2933 3.62615 16.8339 3.16674C16.3745 2.70733 15.8236 2.34967 15.217 2.11699C14.5504 1.86607 13.8458 1.7308 13.1337 1.71699C12.3253 1.66699 12.0587 1.66699 10.0003 1.66699C7.94199 1.66699 7.67532 1.66699 6.86699 1.71699C6.15484 1.7308 5.45028 1.86607 4.78366 2.11699C4.17705 2.34967 3.62615 2.70733 3.16674 3.16674C2.70733 3.62615 2.34967 4.17705 2.11699 4.78366C1.86607 5.45028 1.7308 6.15484 1.71699 6.86699C1.66699 7.68366 1.66699 7.95032 1.66699 10.0003C1.66699 12.0503 1.66699 12.317 1.71699 13.1337C1.7308 13.8458 1.86607 14.5504 2.11699 15.217C2.34967 15.8236 2.70733 16.3745 3.16674 16.8339C3.62615 17.2933 4.17705 17.651 4.78366 17.8837C5.45028 18.1346 6.15484 18.2698 6.86699 18.2837C7.70032 18.2837 7.94199 18.3337 10.0003 18.3337C12.0587 18.3337 12.3253 18.3337 13.1337 18.2837C13.8458 18.2698 14.5504 18.1346 15.217 17.8837C15.8236 17.651 16.3745 17.2933 16.8339 16.8339C17.2933 16.3745 17.651 15.8236 17.8837 15.217C18.1346 14.5504 18.2698 13.8458 18.2837 13.1337C18.2837 12.3003 18.3337 12.0503 18.3337 10.0003C18.3337 7.95032 18.3337 7.68366 18.2837 6.86699ZM16.617 13.0587C16.6024 13.5875 16.5039 14.1107 16.3253 14.6087C16.1776 15.0023 15.9442 15.3581 15.642 15.6503C15.3515 15.9527 14.995 16.1837 14.6003 16.3253C14.1012 16.5112 13.5745 16.6126 13.042 16.6253C12.2587 16.6253 12.017 16.667 9.99199 16.667C7.96699 16.667 7.73366 16.667 6.95032 16.667C6.41867 16.6533 5.89262 16.5548 5.39199 16.3753C4.99837 16.2276 4.64255 15.9942 4.35032 15.692C4.04795 15.4015 3.81692 15.045 3.67533 14.6503C3.49016 14.1538 3.38878 13.63 3.37533 13.1003C3.37533 12.267 3.37533 12.0587 3.37533 10.042C3.37533 8.02532 3.37533 7.78366 3.37533 6.98366C3.38969 6.45133 3.49103 5.92494 3.67533 5.42533C3.81912 5.03419 4.04994 4.68084 4.35032 4.39199C4.6408 4.08962 4.99733 3.85859 5.39199 3.71699C5.89115 3.53107 6.41782 3.42968 6.95032 3.41699C7.73366 3.33366 7.97532 3.33366 10.0003 3.33366C12.0253 3.33366 12.267 3.33366 13.0503 3.33366C13.5854 3.34727 14.1147 3.44861 14.617 3.63366C15.0081 3.77746 15.3615 4.00827 15.6503 4.30866C15.9527 4.59914 16.1837 4.95567 16.3253 5.35032C16.5293 5.85746 16.6449 6.39581 16.667 6.94199C16.667 7.77532 16.7087 7.98366 16.7087 10.0003C16.7087 12.017 16.667 12.2587 16.667 13.0587H16.617Z"
                      fill="#111111"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.1696 5.83334H4.14613C3.89061 5.84875 3.63466 5.81132 3.39426 5.72338C3.15386 5.63544 2.93417 5.49887 2.74891 5.32222C2.56366 5.14557 2.41681 4.93262 2.31754 4.69667C2.21827 4.46072 2.16871 4.20684 2.17196 3.95088C2.17521 3.69491 2.2312 3.44237 2.33642 3.20902C2.44165 2.97566 2.59386 2.76651 2.78354 2.59462C2.97322 2.42272 3.19631 2.29178 3.43886 2.20997C3.68142 2.12816 3.93824 2.09724 4.19328 2.11913C4.44959 2.10056 4.70696 2.13523 4.94923 2.22095C5.19149 2.30666 5.41339 2.44158 5.601 2.6172C5.7886 2.79282 5.93783 3.00536 6.03932 3.24145C6.14081 3.47754 6.19236 3.73207 6.19072 3.98905C6.18908 4.24602 6.13429 4.49988 6.0298 4.73465C5.92531 4.96943 5.77337 5.18005 5.58355 5.35326C5.39372 5.52648 5.17011 5.65855 4.92678 5.74117C4.68344 5.82379 4.42565 5.85517 4.1696 5.83334Z"
                      fill="#111111"
                    />
                    <path
                      d="M5.84792 8.33301H2.51459V18.333H5.84792V8.33301Z"
                      fill="#111111"
                    />
                    <path
                      d="M14.5976 8.33301C14.0359 8.33454 13.4818 8.46302 12.9767 8.70883C12.4717 8.95464 12.0287 9.31143 11.6809 9.75253V8.33301H8.3476V18.333H11.6809V13.7497C11.6809 13.3076 11.8565 12.8837 12.1691 12.5712C12.4816 12.2586 12.9056 12.083 13.3476 12.083C13.7896 12.083 14.2135 12.2586 14.5261 12.5712C14.8387 12.8837 15.0143 13.3076 15.0143 13.7497V18.333H18.3476V12.083C18.3476 11.5906 18.2506 11.1029 18.0621 10.6479C17.8737 10.193 17.5975 9.77958 17.2492 9.43136C16.901 9.08314 16.4876 8.80691 16.0327 8.61846C15.5777 8.43 15.0901 8.33301 14.5976 8.33301Z"
                      fill="#111111"
                    />
                  </svg>
                </Link>
                <Link href="#" className="bg-gray-200 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1016_1718)">
                      <path
                        d="M7.8475 12.651L7.51666 17.3043C7.99 17.3043 8.195 17.101 8.44083 16.8568L10.66 14.736L15.2583 18.1035C16.1017 18.5735 16.6958 18.326 16.9233 17.3277L19.9417 3.18434L19.9425 3.18351C20.21 1.93684 19.4917 1.44934 18.67 1.75518L0.928329 8.54768C-0.282504 9.01768 -0.264171 9.69268 0.722496 9.99851L5.25833 11.4093L15.7942 4.81684C16.29 4.48851 16.7408 4.67018 16.37 4.99851L7.8475 12.651Z"
                        fill="#111111"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1016_1718">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 pb-2 w-fit border-b-2 border-text-primary">
              Company
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pricing/gpu-hosting"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  GPU Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/vps-hosting"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Vps Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/dedicated-hosting"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Dedicated server
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-blue-700 transition-colors"
                >
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 pb-2 w-fit border-b-2 border-text-primary">
              Contact us
            </h2>
            <ul className="space-y-3">
              <li className="text-gray-700">
                Email:{' '}
                <a
                  href="mailto:contact@fabricraftltd.com"
                  className="hover:text-blue-700 transition-colors"
                >
                  contact@fabricraftltd.com
                </a>
              </li>
              <li className="text-gray-700">
                Phone:{' '}
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="hover:text-blue-700 transition-colors"
                >
                  +8801XXXXXXXXX
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 pb-2 w-fit border-b-2 border-text-primary">
              Newsletter
            </h2>
            <p className="text-gray-700 mb-4">
              Information about current events related to our company
            </p>
            <MyFormWrapper
              onSubmit={handleSubmit}
              resolver={zodResolver(newsLetterValidationSchema)}
              className="space-y-2"
            >
              <MyFormInput
                type="email"
                name="email"
                placeHolder="Enter your email"
                inputClassName="w-full bg-white"
              />
              <Button
                htmlType="submit"
                className="w-full bg-primary text-white hover:bg-blue-800"
              >
                Subscribe
              </Button>
            </MyFormWrapper>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-4 border-t border-gray-300 text-center text-gray-600">
          <p>&quot;© Copyright 2025. - All Rights Reserved.&quot;</p>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
