import { useMain } from '../utils/MainProvider';

const PersonalDetailForm = () => {
  const { mainState } = useMain();
  const { user, isAuthenticated } = mainState;

  return (
    <form class="row g-1 m-3">
      <h4>
        {' '}
        <span className="badge bg-warning me-2">2</span>Personal details
      </h4>

      <div class="col-12">
        <label for="email" class="form-label">
          Email
        </label>
        <input
          type="text"
          class="form-control"
          id="email"
          placeholder="Email"
          defaultValue={isAuthenticated && user && user.email}
        />
        <div className="row">
          <div class="col-6">
            <label for="first_name" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="first_name"
              placeholder="First Name"
              defaultValue={isAuthenticated && user && user.first_name}
            />
          </div>
          <div class="col-6">
            <label for="last_name" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="last_name"
              placeholder="Last Name"
              defaultValue={isAuthenticated && user && user.last_name}
            />
          </div>
        </div>
        <div class="col-12">
          <label for="contact" class="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            class="form-control"
            id="contact"
            placeholder="Mobile Number"
            defaultValue={isAuthenticated && user && user.contact}
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalDetailForm;
