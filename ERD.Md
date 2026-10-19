# Entity Relationship Diagram (ERD): LEGALTA

Diagram di bawah ini merepresentasikan struktur basis data inti menggunakan sintaks Mermaid.

```mermaid
erDiagram
    USERS ||--o{ ORDERS : places
    USERS {
        uuid id PK
        string name
        string email
        string password_hash
        string phone_number
        enum role "CLIENT, ADMIN, PLA"
        datetime created_at
    }

    SERVICE_CATEGORIES ||--o{ SERVICES : contains
    SERVICE_CATEGORIES {
        int id PK
        string name "e.g., Pendirian, HKI"
        string slug
    }

    SERVICES ||--o{ ORDERS : belongs_to
    SERVICES {
        int id PK
        int category_id FK
        string title
        string description
        decimal base_price
        int estimated_days
    }

    ORDERS ||--o{ ORDER_TRACKING : has_steps
    ORDERS ||--o{ DOCUMENTS : contains_files
    ORDERS {
        uuid id PK
        uuid user_id FK
        int service_id FK
        uuid pla_id FK "Assigned Personal Legal Assistant"
        enum status "PENDING, ON_PROGRESS, COMPLETED, CANCELLED"
        decimal total_amount
        datetime created_at
    }

    ORDER_TRACKING {
        int id PK
        uuid order_id FK
        string step_name "e.g., Cek Nama PT, Akta Notaris"
        enum status "DONE, JALAN, PENDING"
        datetime updated_at
    }

    DOCUMENTS {
        uuid id PK
        uuid order_id FK
        uuid uploaded_by FK
        string file_name
        string file_url
        enum doc_type "KTP, NPWP, AKTA, NIB"
        datetime created_at
    }