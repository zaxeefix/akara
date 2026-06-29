import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { foodCategories } from "@/lib/data";

export function VendorBusinessForm() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Business profile</h2>
      <form className="mt-5 grid gap-4 md:grid-cols-2">
        <Input label="Business name" name="businessName" />
        <Input label="Owner name" name="ownerName" />
        <Input label="Phone" name="phone" />
        <Input label="WhatsApp" name="whatsapp" />
        <Input label="Email" name="email" type="email" />
        <Input label="State" name="state" />
        <Input label="Local Government" name="localGovernment" />
        <Input label="Ward" name="ward" />
        <Input label="Community" name="community" />
        <Input label="Street" name="street" />
        <Input label="House number" name="houseNumber" />
        <Input label="GPS coordinates" name="coordinates" />
        <Input label="Google Maps location" name="googleMapsLocation" />
        <Input label="Opening hours" name="openingHours" />
        <Input label="Closing hours" name="closingHours" />
        <Input label="Business logo URL" name="businessLogo" />
        <Input label="Cover photo URL" name="coverPhoto" />
        <Textarea className="md:col-span-2" label="Business description" name="description" />
        <Button className="md:col-span-2" type="submit">Save business profile</Button>
      </form>
    </Card>
  );
}

export function FoodItemForm({ mode = "Add" }: { mode?: "Add" | "Edit" }) {
  return (
    <Card>
      <h2 className="text-xl font-bold">{mode} food item</h2>
      <form className="mt-5 grid gap-4 md:grid-cols-2">
        <Input label="Food name" name="name" />
        <Select label="Category" name="category" options={foodCategories.map((item) => ({ label: item, value: item }))} />
        <Input label="Price" name="price" type="number" />
        <Input label="Image URL" name="imageUrl" />
        <Textarea className="md:col-span-2" label="Description" name="description" />
        <Button className="md:col-span-2" type="submit">{mode} item</Button>
      </form>
    </Card>
  );
}
