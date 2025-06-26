# TripMate Travel Planning App - UI/UX Prompts


---

## 1. Layout (Sidebar & Global Navigation)

**Prompt:**
Design a sidebar layout for the "TripMate" travel planning app, based on an attached wireframe.

**Theme:** Use a flat, minimal design with consistent typography, light shadow, and uniform spacing. Use rounded corners and subtle borders for elements. Add icons for navigation items.

**Navigation Items:**
* Dashboard
* My Trips
* Explore
* Itinerary
* Bookings
* Travel Journal
* Settings

The sidebar should be fixed on the left, with a top logo and user avatar at the bottom.

---

## 2. My Trips (Homepage Dashboard)

**Prompt:**
Generate a user dashboard page showing a list of "My Trips." At the top, add a button "+ New Trip." Below, display a card-based layout with each trip's title, destination, travel dates, trip type (e.g., Vacation, Business), and a "View Itinerary" link. Each card includes an overflow menu with "Edit," "Delete," and "Duplicate" options.

**Model to use: Trip**
* Id (string)
* Title (string)
* Destination (string)
* StartDate (DateTime)
* EndDate (DateTime)
* Type (string) – Vacation, Business, Adventure, etc.
* UserId (string)

Clicking "View Itinerary" navigates to the itinerary page. "+ New Trip" opens a trip creation dialog.

---

## 3. Trip Itinerary Page

**Prompt:**
Generate a detailed itinerary page for a selected trip. At the top, display trip summary (destination, dates, trip type). Below, organize daily activities in an accordion format with "Add Activity" buttons per day. Each activity shows title, time, location, and category (sightseeing, food, transport, etc.) with edit/delete icons.

**Model to use: ItineraryItem**
* Id (string)
* TripId (string)
* Date (DateTime)
* Time (string)
* Title (string)
* Location (string)
* Category (string)

Clicking "Add Activity" opens a form to enter new itinerary items. Each accordion section is collapsible by date.

---

## 4. Explore Destinations Page

**Prompt:**
Create an "Explore" page that suggests travel destinations based on user interests and season. Include a search bar and interest filters (beaches, mountains, culture, food). Display cards for each destination with name, image, description, best travel months, and a "Save to Trip" button.

**Model to use: Destination**
* Id (string)
* Name (string)
* Description (string)
* BestMonths (string[])
* Tags (string[])
* ImageUrl (string)

"Save to Trip" opens a modal to select a trip to add the destination to. Searching or filtering dynamically updates results.

---

## 5. Bookings Page

**Prompt:**
Generate a bookings dashboard where users can view flights, hotels, and activities booked for their trips. Use tab-style buttons to switch between "Flights," "Stays," and "Activities." Below, display tables with details like booking ID, provider, date, and status. Each row has a "View Details" link and icons for reschedule or cancel.

**Model to use: Booking**
* Id (string)
* TripId (string)
* BookingType (string) – Flight, Stay, Activity
* Provider (string)
* BookingDate (DateTime)
* Status (string) – Confirmed, Cancelled, Rescheduled
* ReferenceCode (string)

Filtering options allow viewing bookings by status or trip. Tabs filter by booking type.

---

## 6. Travel Journal Page

**Prompt:**
Generate a personal travel journal page for documenting trip experiences. At the top, show a dropdown to select a trip. Below, display journal entries in a timeline format with date, title, mood icon, and photo. Add a "+ New Entry" button to create a new journal post.

**Model to use: TravelJournalEntry**
* Id (string)
* TripId (string)
* Date (DateTime)
* Title (string)
* Description (string)
* Mood (string)
* PhotoUrl (string)

Each entry card has edit and delete icons. Selecting a trip filters journal entries for that trip.

---

## 7. Settings Page

**Prompt:**
Generate a settings page with tabs for "Profile," "Preferences," and "Notifications." Each section should be within its own card.

* **Profile:** Edit name, email, profile picture.
* **Preferences:** Default trip type, preferred destinations, time zone.
* **Notifications:** Toggle email alerts for bookings, itinerary changes, and travel deals.

**Model to use: UserSettings**
* Id (string)
* UserId (string)
* DefaultTripType (string)
* PreferredDestinations (string[])
* TimeZone (string)
* NotifyBookings (bool)
* NotifyDeals (bool)
* NotifyChanges (bool)

Use flat design with tabs at the top, and save/cancel buttons for each section.
