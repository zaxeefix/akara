import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { foodCategories } from "@/lib/data";

const timeOptions = [
  "Closed",
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM"
].map((time) => ({ label: time, value: time }));

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function FileUploadField({ label, name, helper }: { label: string; name: string; helper: string }) {
  return (
    <label className="grid gap-2 rounded-card border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <span>{label}</span>
      <input
        name={name}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="block w-full cursor-pointer rounded-card border border-slate-300 bg-white text-sm text-slate-700 file:mr-3 file:border-0 file:bg-primary file:px-4 file:py-3 file:font-semibold file:text-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
      />
      <span className="text-xs text-slate-500 dark:text-slate-400">{helper}</span>
    </label>
  );
}

function OpeningHoursDropdowns() {
  return (
    <div className="grid gap-3 rounded-card border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900 md:col-span-2">
      <div>
        <h3 className="font-bold">Opening hours</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">Set daily hours with dropdowns, similar to a business profile schedule.</p>
      </div>
      <div className="grid gap-3">
        {weekDays.map((day) => (
          <div key={day} className="grid gap-2 rounded-card bg-white p-3 dark:bg-slate-950 md:grid-cols-[120px_1fr_1fr] md:items-center">
            <p className="font-semibold">{day}</p>
            <Select label="Open" name={`${day.toLowerCase()}Open`} options={timeOptions} defaultValue="6:00 AM" />
            <Select label="Close" name={`${day.toLowerCase()}Close`} options={timeOptions} defaultValue="6:00 PM" />
          </div>
        ))}
      </div>
    </div>
  );
}

function GoogleBusinessLocationPicker() {
  return (
    <div className="grid gap-4 rounded-card border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-slate-900 md:col-span-2">
      <div>
        <h3 className="font-bold">Google business location</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">Add the public business location customers should navigate to. Google Places autocomplete can be connected here when the Maps key is enabled.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Input label="Business place name" name="googlePlaceName" placeholder="Amina's Akara Spot" />
        <Input label="Google Place ID" name="googlePlaceId" placeholder="Optional after Google Places lookup" />
        <Input className="md:col-span-2" label="Search or paste Google Maps address" name="googleMapsAddress" placeholder="Search your business location or paste the map address" />
        <Input label="Latitude" name="latitude" inputMode="decimal" />
        <Input label="Longitude" name="longitude" inputMode="decimal" />
      </div>
      <div className="rounded-card border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
        <p className="font-semibold">Map preview</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">A Google Business-style map preview will appear here after location lookup is connected. Vendors can still submit address and GPS coordinates manually during beta.</p>
      </div>
    </div>
  );
}

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
        <GoogleBusinessLocationPicker />
        <OpeningHoursDropdowns />
        <FileUploadField label="Upload business logo" name="businessLogo" helper="Upload PNG, JPG, or WebP. Do not paste image URLs." />
        <FileUploadField label="Upload cover photo" name="coverPhoto" helper="Use a clear storefront, food stand, or product photo." />
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
        <FileUploadField label="Upload food image" name="foodImage" helper="Upload the real food photo directly from your device." />
        <Textarea className="md:col-span-2" label="Description" name="description" />
        <Button className="md:col-span-2" type="submit">{mode} item</Button>
      </form>
    </Card>
  );
}
