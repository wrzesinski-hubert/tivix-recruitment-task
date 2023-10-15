export type MinifigType = {
  id: number;
  quantity: number;
  set_img_url: string;
  set_name: string;
  set_num: string;
};

export type MinifigWithDetailType = {
  name: string;
  set_img_url: string;
  set_num: string;
  set_url?: string;
};
