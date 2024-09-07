import tokenInstance from "./tokenInstance";

export interface GetInquiryProps {
  startDate?: string;
  endDate?: string;
  status?: string;
  page: number;
}

export interface UpdateInquiryStatusProps {
  inquiryId: number;
  status: string;
}

export const getInquiry = async ({
  startDate,
  endDate,
  status,
  page,
}: GetInquiryProps) => {
  const response = await tokenInstance({
    url: "/inquiry",
    method: "get",
    params: { startDate, endDate, status, page },
  });
  return response.data;
};

export const updateInquiryStatus = async ({
  inquiryId,
  status,
}: UpdateInquiryStatusProps) => {
  const response = await tokenInstance({
    url: `/inquiry/status/${inquiryId}`,
    method: "patch",
    params: { status },
  });
  return response.data;
};

export const deleteInquiry = async (inquiryId: number) => {
  const response = await tokenInstance({
    url: `/inquiry/${inquiryId}`,
    method: "delete",
  });
  return response.data;
};
