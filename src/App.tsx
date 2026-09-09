import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { Layout } from "@/components/layout/Layout"
import { AdminLayout } from "@/pages/admin/AdminLayout"
import AdminDashboard from "@/pages/admin/Dashboard"
import {
  AdminAvailability,
  AdminBlog,
  AdminBookings,
  AdminExperiences,
  AdminFaqs,
  AdminGallery,
  AdminReports,
  AdminReviews,
  AdminRooms,
  AdminSettings,
} from "@/pages/admin/pages"

const Home = lazy(() => import("@/pages/Home"))
const Fishing = lazy(() => import("@/pages/Fishing"))
const FishingExperience = lazy(() => import("@/pages/FishingExperience"))
const Accommodation = lazy(() => import("@/pages/Accommodation"))
const Rooms = lazy(() => import("@/pages/Rooms"))
const Room = lazy(() => import("@/pages/Room"))
const Facilities = lazy(() => import("@/pages/Facilities"))
const VictoriaFalls = lazy(() => import("@/pages/VictoriaFalls"))
const Gallery = lazy(() => import("@/pages/Gallery"))
const About = lazy(() => import("@/pages/About"))
const Contact = lazy(() => import("@/pages/Contact"))
const Book = lazy(() => import("@/pages/Book"))
const BookConfirmation = lazy(() => import("@/pages/BookConfirmation"))
const Plan = lazy(() => import("@/pages/Plan"))
const NotFound = lazy(() => import("@/pages/NotFound"))

function Fallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-ivory text-ink">
      <p className="eyebrow">Loading</p>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/fishing" element={<Fishing />} />
              <Route path="/fishing/:slug" element={<FishingExperience />} />
              <Route path="/stay" element={<Accommodation />} />
              <Route path="/stay/rooms" element={<Rooms />} />
              <Route path="/stay/rooms/:slug" element={<Room />} />
              <Route path="/stay/facilities" element={<Facilities />} />
              <Route path="/accommodation" element={<Navigate to="/stay" replace />} />
              <Route path="/victoria-falls" element={<VictoriaFalls />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/book/confirmation" element={<BookConfirmation />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="bookings" element={<AdminBookings />} />
              <Route path="experiences" element={<AdminExperiences />} />
              <Route path="rooms" element={<AdminRooms />} />
              <Route path="availability" element={<AdminAvailability />} />
              <Route path="reports" element={<AdminReports />} />
              <Route path="gallery" element={<AdminGallery />} />
              <Route path="reviews" element={<AdminReviews />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="faqs" element={<AdminFaqs />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
