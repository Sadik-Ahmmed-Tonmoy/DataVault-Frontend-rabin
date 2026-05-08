/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyButton from "@/components/ui/MyButton/MyButton";
import MyFormImageUpload from "@/components/ui/MyForm/MyFormImageUpload/MyFormImageUpload";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useCreateBlogMutation } from "@/redux/features/blog/blog.user.api";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "suneditor/dist/css/suneditor.min.css";
import { z } from "zod";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const options = {
  buttonList: [
    ["undo", "redo"],
    ["fontSize", "formatBlock"],
    // ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["bold", "underline", "italic"],
    ["removeFormat"],
    ["fontColor", "hiliteColor"],
    ["indent", "outdent"],
    ["link"],
    // ['align', 'list', 'lineHeight'],
    // ['table', 'link', 'image'],
    // ["link", "image"],
    // ['fullScreen', 'showBlocks', 'codeView'],
  ],
  minHeight: "200px",
  font: [
    "Arial",
    "Comic Sans MS",
    "Courier New",
    "Georgia",
    "Impact",
    "Tahoma",
    "Times New Roman",
    "Verdana",
    "Roboto", // Add your custom fonts here
    "Open Sans",
  ],
  fontSize: [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 64], // Add or customize font sizes
  defaultStyle: "font-family: Arial; font-size: 14px;", // Set default font and font size
};

const validationSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  category: z.string({
    required_error: "Category is required",
  }),
  // description: z.string({
  //   required_error: "Description is required",
  // }),
  displayImage: z.union([
    z.string({
      required_error: "Display Image is required",
    }),
    z
      .instanceof(File)
      .refine((file) => (file ? file.size <= 50 * 1024 * 1024 : true), {
        message: "Image size must be less than 50MB",
      }),
  ]),
  secondaryImage:  z
  .array(
    z.union([
      z.string({
        required_error: "Secondary Image is required",
      }), // For existing images (URLs)
      z.instanceof(File)
        .refine((file) => file.size <= 50 * 1024 * 1024, {
          message: "Each image must be less than 50MB",
        })
    ])
  )
  .min(1, { message: "At least one image is required" })
  .max(3, { message: "Maximum 3 images allowed" })
});

const CreateBlog = () => {
  const [content, setContent] = useState("");
  const router = useRouter();
  const [createBlogMutation] = useCreateBlogMutation();
 
  const handleSubmit = async (data: any, reset: any) => {
    const formData = new FormData();
    const body = {
      title: data.title,
      descriptions: content,
      category: data.category,
    };

    formData.append("data", JSON.stringify(body));

    if (data.displayImage instanceof File) {
      formData.append("displayImage", data.displayImage);
    }
    if (data.secondaryImage) {
      data.secondaryImage.forEach((image: File) => {
        formData.append("secondaryImage", image);
      });
    }

    const bannerResponse = await handleAsyncWithToast(async () => {
      return createBlogMutation(formData);
    });

    if (bannerResponse?.data?.success) {
      reset();
      router.push(`/dashboard/blog-management`);
    }
  };

  return (
    <div>
      <MyFormWrapper
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        className="space-y-6"
      >
        <div className="bg-[#F9F8FF] p-3 md:p-6 rounded-lg space-y-4">
          <MyFormInput
            name="title"
            label="Title "
            inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MyFormInput
            name="category"
            label="Category "
            placeHolder="e.g. Technology, Health, etc."
            inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* <MyFormTextArea
            name="description"
            label="Description"
            inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <div className="space-y-2">
            <label className="">
              Description{" "}
              <span className="text-[#808080]">
                (Write your blog content here)
              </span>
            </label>
            <SunEditor
              onChange={(data: string) => {
                setContent(data);
              }}
              setOptions={options}
              setContents={content}
            />
          </div>
          <MyFormImageUpload
            name="displayImage"
            label="Display Image"
            inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            previewImageClassName="h-96  overflow-hidden"
            multiple={false}
            maxImages={1}
          />
          <MyFormImageUpload
            name="secondaryImage"
            label="Secondary Image"
            inputClassName="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            previewImageClassName="h-96  overflow-hidden"
            maxImages={3}

          />
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button className="py-2 mb-4" type="default" htmlType="submit">
            Create
          </Button>
        </div>
      </MyFormWrapper>
    </div>
  );
};

export default CreateBlog;
