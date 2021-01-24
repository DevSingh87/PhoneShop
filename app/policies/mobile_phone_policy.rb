class MobilePhonePolicy < ApplicationPolicy

  def index?
    user.has_role?(:business_owner) || user.has_role?(:store_manager)
  end

  def create?
    user.has_role?(:business_owner) || user.has_role?(:store_manager)
  end

end
