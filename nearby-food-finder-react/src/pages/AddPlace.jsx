import { useState } from 'react';
import { Link } from 'react-router-dom';

const DEFAULT_LOCATION = {
  lat: '11.5564',
  lng: '104.9282',
};

const createFood = () => ({
  id: crypto.randomUUID(),
  name: '',
  price: '',
  description: '',
  image: '',
});

const createInitialForm = () => ({
  name: '',
  category: 'Restaurant',
  cuisine: '',
  price: '$$',
  address: '',
  description: '',
  ...DEFAULT_LOCATION,
  images: [],
  menu: [createFood()],
});

export default function AddPlace({ onAdd }) {
  const [form, setForm] = useState(createInitialForm);
  const [message, setMessage] = useState('');

  const updateForm = (key, value) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const readFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file);
    });

  const handlePhotos = async (event) => {
    const files = [...event.target.files];

    if (!files.length) return;

    try {
      const images = await Promise.all(files.map(readFile));

      setForm((current) => ({
        ...current,
        images: [...current.images, ...images],
      }));
    } catch {
      setMessage('Unable to read one or more images.');
    }

    event.target.value = '';
  };

  const removeImage = (index) => {
    setForm((current) => ({
      ...current,
      images: current.images.filter((_, i) => i !== index),
    }));
  };

  const handleFoodPhoto = async (index, event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const image = await readFile(file);

      setForm((current) => ({
        ...current,
        menu: current.menu.map((food, i) =>
          i === index
            ? { ...food, image }
            : food
        ),
      }));
    } catch {
      setMessage('Unable to read the food image.');
    }

    event.target.value = '';
  };

  const updateFood = (index, key, value) => {
    setForm((current) => ({
      ...current,
      menu: current.menu.map((food, i) =>
        i === index
          ? { ...food, [key]: value }
          : food
      ),
    }));
  };

  const addFood = () => {
    setForm((current) => ({
      ...current,
      menu: [...current.menu, createFood()],
    }));
  };

  const removeFood = (index) => {
    setForm((current) => ({
      ...current,
      menu: current.menu.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('');

    if (!form.name.trim() || !form.address.trim()) {
      setMessage('Please add the place name and address.');
      return;
    }

    const place = {
      ...form,
      name: form.name.trim(),
      address: form.address.trim(),
      lat: Number(form.lat) || Number(DEFAULT_LOCATION.lat),
      lng: Number(form.lng) || Number(DEFAULT_LOCATION.lng),
      coverImage: form.images[0] || '',
      distance: 0,
      rating: 0,
    };

    onAdd(place);

    setMessage(
      'Submitted. It is now waiting for admin approval.'
    );

    setForm(createInitialForm());
  };

  return (
    <main className="form">
      <Link className="back" to="/">
        ← Back
      </Link>

      <header className="title">
        <small>ADD FOOD PLACE</small>
        <h1>Submit a restaurant</h1>
        <p>
          Your food will be hidden until an admin approves it.
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={form.name}
            onChange={(e) => updateForm('name', e.target.value)}
            placeholder="Restaurant name"
            required
          />
        </label>

        <div className="two">
          <label>
            Category
            <input
              value={form.category}
              onChange={(e) =>
                updateForm('category', e.target.value)
              }
              placeholder="Restaurant"
            />
          </label>

          <label>
            Cuisine
            <input
              value={form.cuisine}
              onChange={(e) =>
                updateForm('cuisine', e.target.value)
              }
              placeholder="Khmer, Thai, Italian..."
            />
          </label>
        </div>

        <label>
          Price
          <select
            value={form.price}
            onChange={(e) =>
              updateForm('price', e.target.value)
            }
          >
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </select>
        </label>

        <label>
          Address
          <input
            value={form.address}
            onChange={(e) =>
              updateForm('address', e.target.value)
            }
            placeholder="Restaurant address"
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={form.description}
            onChange={(e) =>
              updateForm('description', e.target.value)
            }
            placeholder="Tell people about this restaurant..."
            rows={4}
          />
        </label>

        <section>
          <h2>Restaurant images</h2>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotos}
          />

          {form.images.length > 0 && (
            <div className="uploads">
              {form.images.map((image, index) => (
                <div className="upload" key={`${image}-${index}`}>
                  <img
                    src={image}
                    alt={`Restaurant photo ${index + 1}`}
                  />

                  <button
                    type="button"
                    aria-label={`Remove restaurant photo ${
                      index + 1
                    }`}
                    onClick={() => removeImage(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="heading">
            <h2>Food menu</h2>

            <button
              type="button"
              onClick={addFood}
            >
              ＋ Add food
            </button>
          </div>

          {form.menu.map((food, index) => (
            <div className="menuform" key={food.id}>
              <div className="menuform-header">
                <b>Food {index + 1}</b>

                {form.menu.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFood(index)}
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                placeholder="Food name"
                value={food.name}
                onChange={(e) =>
                  updateFood(index, 'name', e.target.value)
                }
              />

              <input
                placeholder="Price"
                value={food.price}
                onChange={(e) =>
                  updateFood(index, 'price', e.target.value)
                }
              />

              <textarea
                placeholder="Food description"
                value={food.description}
                onChange={(e) =>
                  updateFood(
                    index,
                    'description',
                    e.target.value
                  )
                }
                rows={3}
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleFoodPhoto(index, e)
                }
              />

              {food.image && (
                <img
                  className="smallphoto"
                  src={food.image}
                  alt={`${food.name || 'Food'} preview`}
                />
              )}
            </div>
          ))}
        </section>

        <div className="notice">
          🔒 Admin approval is required before your restaurant
          appears on the public map.
        </div>

        <button className="primary" type="submit">
          Submit for approval
        </button>

        {message && (
          <p
            className={
              message.startsWith('Submitted')
                ? 'success'
                : 'error'
            }
            role="alert"
          >
            {message}
          </p>
        )}
      </form>
    </main>
  );
}
