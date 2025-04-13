import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
);

class ImageService {
  private bucketName = "images";

  async upload(file: File | Blob, folder: string): Promise<string> {
    const extension = file.type === "image/png" ? "png" : "jpg";
    const filename = `${folder}/${uuidv4()}.${extension}`;

    const { error } = await supabase.storage
      .from(this.bucketName)
      .upload(filename, file, {
        contentType: file.type || "image/jpeg",
        upsert: true,
      });

    if (error) throw error;

    return this.getPublicUrl(filename);
  }

  getPublicUrl(path: string): string {
    const { data } = supabase.storage.from(this.bucketName).getPublicUrl(path);
    return data.publicUrl;
  }

  async delete(path: string): Promise<void> {
    const { error } = await supabase.storage
      .from(this.bucketName)
      .remove([path]);
    if (error) throw error;
  }
}

const imageService = new ImageService();
export default imageService;
